import {Contact} from "@/components/shared/contact";

const Page = ({params}: {params: {lang: string; calligraphyId: string}}) => {
    console.log(params);
    
    return (
        <Contact title={"Contact Calligrapher"} />
    );
}

export default Page;