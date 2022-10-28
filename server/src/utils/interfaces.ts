export interface IWord {
    id: number,
    word: string,
    pos: string
}

export interface ISortedWordList {
    adverb: IWord[],
    verb: IWord[],
    noun: IWord[],
    adjective: IWord[],
}