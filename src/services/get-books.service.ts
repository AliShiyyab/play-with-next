const GetBooksService = async () => {
    let apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'
    let response = await fetch(apiUrl, 
        {cache: "force-cache", next: {revalidate: 60}})
    if (!response.ok) {
        return {
            'errorStatusCode': response.status,
            'error': response.status == 400 ? response.json().then((response) => response.error) : null
        }
    }
    return response.json()
}

export default GetBooksService