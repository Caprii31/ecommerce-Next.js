import sanityClient from  '@sanity/client'; 
import imageUrlBuilder from  '@sanity/image-url'


export const client = sanityClient({
    projectId : 'reuh6cj3',
    dataset : 'production',
    apiVersion : '2023-03-08',
    useCdn : true,
    token : process.env.SANITY_API_TOKEN
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)