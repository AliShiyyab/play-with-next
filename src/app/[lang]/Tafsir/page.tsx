import {NavigationBar} from "@/components/header/navigation-bar";
import {locales} from "@/middleware";

const Tafsir = ({params} : {params: {lang: string}}) => {
    return (
        <div className={'flex flex-col w--full p-0 m-0'}>
            <NavigationBar lang={params.lang} locales={locales}/>
            <div className={'h-0.5 bg-red-900'} />
        </div>
    );
}

export default Tafsir;