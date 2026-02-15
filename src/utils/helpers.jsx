export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatReadTime = (minutes) => {
  return `${minutes} min read`;
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder.jpg';
  if (imagePath.startsWith('http')) return imagePath;
  
  // Use environment variable, fallback to production URL
  const apiUrl = import.meta.env.VITE_API_URL || 'https://nation-style.onrender.com/api';
  const BASE_URL = apiUrl.replace('/api', '');
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  return `${BASE_URL}/${cleanPath}`;
};

export const generateExcerpt = (content, length = 150) => {
  const stripped = content.replace(/<[^>]*>/g, "");
  return truncateText(stripped, length);
};