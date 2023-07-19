export interface Post {
    id: number;
    attributes: {
        Title: string;
        Body: string;
        Slug: string;
        // Add other fields as needed
    };
}