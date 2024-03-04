import { createContext, useContext } from "react";

export const SocialMediaContext = createContext();

export default function useSocialMediaContext() {
    return useContext(SocialMediaContext);
}