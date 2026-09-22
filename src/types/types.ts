export interface Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string | null;
}

export interface Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

export interface Agent {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    fullPortrait: string;
    background: string;
    role: Role;
    abilities: Ability[];
    isPlayableCharacter: boolean;
}

export interface ValorantApiResponse {
    status: number;
    data: Agent[];
}

export interface ValorantApiSingleResponse {
    status: number;
    data: Agent;
}