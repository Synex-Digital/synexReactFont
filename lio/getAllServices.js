export default async function getAllServices() {
    const data = await fetch(
        "http://sd-admin-backend.synexdigital.com/api/services"
    );
    return data.json();
}
