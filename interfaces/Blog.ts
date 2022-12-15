export interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
}

export interface Small {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
}

export interface Medium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
}

export interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
}

export interface Formats {
    large: Large;
    small: Small;
    medium: Medium;
    thumbnail: Thumbnail;
}

export interface Attributes2 {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface Datum {
    id: number;
    attributes: Attributes2;
}

export interface Image {
    data: Datum[];
}

export interface Localizations {
    data: any[];
}

export interface Attributes {
    title: string;
    short_description: string;
    description: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    image: Image;
    localizations: Localizations;
}

export interface BlogItemInterface {
    id: number;
    attributes: Attributes;
}