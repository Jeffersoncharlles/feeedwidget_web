
export interface IFeedBackCreate {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: IFeedBackCreate) => Promise<void>;
}