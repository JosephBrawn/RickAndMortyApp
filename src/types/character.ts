export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharactersResponse {
    info: IPageInfo;
    results: Character[];
}
export interface Ifavorites{
    favoriteCards:Character[];
    modalCharacter: Character | null;

}

export interface IPageInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}