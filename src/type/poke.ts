export interface IApiInfo {
  name: string;
  url: string;
}

export interface IGeneraInfo {
  genus: string;
  language: IApiInfo;
}

export interface IPokeFormData {
  abilities: {
    ability: IApiInfo;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: IApiInfo[];
  game_indices: { game_index: number; version: IApiInfo }[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: IApiInfo;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: IApiInfo;
      version_group: IApiInfo;
    };
  }[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: IApiInfo;
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      'dream_world': {
        front_default: string;
        front_female: string | null;
      };
      'home': {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
    versions: {
      'generation-i': {
        red: IGenerationI;
        yellow: IGenerationI;
      };
      'generation-ii': {
        crystal: IGenerationII;
        gold: IGenerationII;
        silver: IGenerationII;
      };
      'generation-iii': {
        'emerald': Omit<IGenerationIII, 'back_default' | 'back_shiny'>;
        'firered-leafgreen': IGenerationIII;
        'ruby-sapphire': IGenerationIII;
      };
      'generation-iv': {
        'diamond-pearl': IGenerationIV;
        'heartgold-soulsilver': IGenerationIV;
        'platinum': IGenerationIV;
      };
      'generation-v': {
        'black-white': IGenerationV;
      };
      'generation-vi': {
        'omegaruby-alphasapphire': IGenerationVI;
        'x-y': IGenerationVI;
      };
      'generation-vii': {
        'icons': IIcons;
        'ultra-sun-ultra-moon': IGenerationVII;
      };
      'generation-viii': {
        icons: IIcons;
      };
    };
  };
  stats: { base_stat: number; effort: number; stat: IApiInfo };
  types: { slot: number; type: IApiInfo }[];
  weight: 29;
}

export interface PokeDetailType {
  base_happiness: number;
  capture_rate: number;
  color: IApiInfo;
  egg_groups: IApiInfo;
  evolution_chain: { url: string };
  evolves_from_species: IApiInfo;
  flavor_text_entries: {
    flavor_text: string;
    language: IApiInfo;
    version: IApiInfo;
  }[];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: IGeneraInfo[];
  generation: IApiInfo;
  growth_rate: IApiInfo;
  habitat: IApiInfo;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: { language: IApiInfo; name: string }[];
  order: string;
  pal_park_encounters: { area: IApiInfo; base_score: number; rate: number };
  pokedex_numbers: { entry_number: number; pokedex: IApiInfo };
  shape: IApiInfo;
  varieties: { is_default: boolean; pokemon: IApiInfo };
}

export interface IGenerationI {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface IGeneration {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IIcons {
  front_default: string;
  front_female: string | null;
}

export interface IGenerationII extends IGeneration {
  back_shiny_transparent: string;
  back_transparent: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface IGenerationIII extends IGeneration {}

export interface IGenerationIV extends IGeneration {
  back_female: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface IGenerationV extends IGenerationIV {
  animated: IGenerationIV;
}

export interface IGenerationVI {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface IGenerationVII extends IGenerationVI {}
