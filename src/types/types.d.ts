export interface IImgurData {
    deletehash: string;
    link: string;
}

export interface IComment {
    content: string;
    createdBy: IAuthor;
    createdAt: string;
    nestedComments: IComment[];
}

interface IAuthor {
    id: number;
    nickname: string;
    profileImageUrl: string;
}
