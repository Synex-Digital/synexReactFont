export default async function getAllProject() {
    const data = await fetch(
        "https://sd-admin-backend.synexdigital.com/api/projects"
    );
    return data.json();
}