import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Post() {
    const router = useRouter();
    console.log(router)

    return <MainLayout title={`Post ${router.query.id}`}>
        <h1>Post {router.query.id}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, sit.</p>
    </MainLayout>
}
