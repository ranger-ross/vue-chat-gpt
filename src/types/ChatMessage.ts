import {PromptInput} from "./PromptInput";
import {GptMessage} from "./GptMessage";

// Union of User input and GPT response
export type ChatMessage = PromptInput | GptMessage;