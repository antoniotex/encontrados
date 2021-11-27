interface Image {
    id: number;
    location: string;
}

interface Category {
    id: number;
    description: string;
}

export interface Post {
    id: string;
    title: string;
    description: string;
    images: Image[];
    created_at: Date;
    category: Category;
}