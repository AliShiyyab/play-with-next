import Error404 from "@/components/errors-component/error-404";
import Error500 from "@/components/errors-component/error-500";

interface ErrorStatusCode {
    params: {
        id: string
    }
}
const Page = ({params}: ErrorStatusCode) => {
    if (params.id === "404")
        return <Error404 />
    else
        return <Error500 />
}

export default Page;