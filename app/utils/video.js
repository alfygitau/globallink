import axios from "axios";

function getVideoNameFromSource(sourceUri) {
  if (!sourceUri) {
    return null;
  }
  const uriSegments = sourceUri.split("/");
  const filename = uriSegments[uriSegments.length - 1];
  return filename;
}

export default getVideoNameFromSource;

export const getVideoSize = async (videoUrl) => {
  try {
    const response = await fetch(videoUrl, { method: "HEAD" });

    if (response.headers.has("content-length")) {
      const sizeInBytes = parseInt(response.headers.get("content-length"), 10);
      // Convert to KB, MB, etc. if needed
      return sizeInBytes;
    }
  } catch (error) {
    console.error("Error fetching video size:", error);
  }

  return null;
};
