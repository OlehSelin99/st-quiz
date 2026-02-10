import GET_ALL_CHARACTERS_URL from "./api";
import type { ApiCharacter } from "./type";

const getAllCharacters = async (): Promise<ApiCharacter[]> => {
  const response = await fetch(GET_ALL_CHARACTERS_URL);
  const data: ApiCharacter[] = await response.json();
  return data;
};

export default getAllCharacters;