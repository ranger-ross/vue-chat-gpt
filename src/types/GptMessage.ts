// Redefine the response types because openai/api package only supports nodejs runtime.
// So we can't import the Typescript types into the Vue app

export type GptMessage = {
    'id': string;
    'object': string;
    'created': number;
    'model': string;
    'choices': CreateCompletionResponseChoicesInner[];
    'usage'?: CreateCompletionResponseUsage;
};


export type CreateCompletionResponseUsage = {
    'prompt_tokens': number;
    'completion_tokens': number;
    'total_tokens': number;
}

export type CreateCompletionResponseChoicesInner = {
    'text'?: string;
    'index'?: number;
    'logprobs'?: unknown | null;
    'finish_reason'?: string;
}

