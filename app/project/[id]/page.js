import Breadcrumbs from "@/app/components/Breadcrumbs";

export default async function ProjectPage({ params }) {
    const { id } = params;

    return (
        <section>
            <Breadcrumbs
                title={"Multi BD Shop - Gaming eCommerce Store"}
                stateoff={true}
            />
        </section>
    );
}
