export default async function getAllBlogs() {
    const data = await fetch(
        "http://sd-admin-backend.synexdigital.com/api/blogs"
    );
    return data.json();
}
