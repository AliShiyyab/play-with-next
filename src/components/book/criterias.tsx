import {Criteria} from "@/components/book/criteria";

export const Criterias = () => {
    return (
        <div className={''}>
            {criteriaData && criteriaData.map((val) => (
                <div className={"px-12 "}>
                    <div className={'h-0.5 bg-gray-200 w-full'}></div>
                <Criteria title={val.title} data={val.data} />
                </div>
            ))}
        </div>
    );
}

const criteriaData = [{
    title: "Criteria 1",
    data: [
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },{
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },{
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        }
    ]
},
    {
        title: "Criteria 2",
        data: [
            {
                name: "Islamic Book Title",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            },
            {
                name: "Islamic Book Title",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            },
            {
                name: "Islamic Book Title",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            },
            {
                name: "Islamic Book Title",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            }
        ]
    },
    {
        title: "Criteria 3",
        data: [
            {
                name: "Islamic Book Title",
                description: "Islamic Book Description",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            },
            {
                name: "Islamic Book Title",
                description: "Islamic Book Description",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            },
            {
                name: "Islamic Book Title",
                description: "Islamic Book Description",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            },
            {
                name: "Islamic Book Title",
                description: "Islamic Book Description",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            }
        ]
    }
]