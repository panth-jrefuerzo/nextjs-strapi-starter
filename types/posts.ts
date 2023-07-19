export interface Post {
    id: number;
    attributes: {
        Title: string;
        Body: string;
        Slug: string;
        FeaturedImage: any;
        // Add other fields as needed
    };
}