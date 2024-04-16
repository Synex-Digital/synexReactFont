export default async function getBlogView(id) {
    const data = await fetch(
        `https://sd-admin-backend.synexdigital.com/api/blogs/${id}`
    );
    return data.json();
}
