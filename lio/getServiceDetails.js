export default async function getServiceDetails(id) {
    const data = await fetch(
        `https://sd-admin-backend.synexdigital.com/api/services/${id}`
    );
    return data.json();
}
