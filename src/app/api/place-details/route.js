import axios from "axios";

export async function GET(request) {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;

    const fields =
      "name,formatted_address,formatted_phone_number,geometry,opening_hours,photos,rating,reviews,user_ratings_total,website";

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${process.env.GOOGLE_API_KEY}`;
    const { data } = await axios.get(url);

    if (data.status !== "OK") {
      return Response.json({
        error: data.status,
        message: data.error_message,
      });
    }

    const place = data.result;

    let placePhotos = [];
    if (place.photos) {
      placePhotos = place.photos.map((photo) => ({
        photo_reference: photo.photo_reference,
        image_url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photo_reference=${photo.photo_reference}&key=${process.env.GOOGLE_API_KEY}`,
        attributions: photo.html_attributions,
      }));
    }

    const reviews =
      place.reviews?.map((review, i) => ({
        author_name: review.author_name,
        author_url: review.author_url,
        language: review.language,
        original_language: review.original_language,
        profile_photo_url: review.profile_photo_url,
        rating: review.rating,
        relative_time_description: review.relative_time_description,
        text: review.text,
        time: review.time,
        translated: review.translated,

        photos:
          placePhotos.length > 0
            ? placePhotos.slice(
                i % placePhotos.length,
                (i % placePhotos.length) + 2
              )
            : [],
      })) || [];

    const result = {
      name: place.name,
      address: place.formatted_address,
      phone: place.formatted_phone_number || "Not available",
      website: place.website || "Not available",
      rating: place.rating,
      total_reviews: place.user_ratings_total,
      geometry: place.geometry,
      opening_hours: place.opening_hours || {},
      reviews,
      photos: placePhotos,
    };

    return Response.json(result);
  } catch (error) {
    console.error("Error fetching place details:", error.message);
    Response.json({ error: "Failed to fetch place details" });
  }
}
