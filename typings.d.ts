/* 
    because this is the easiest way of showing
    what the file format should look like.

    Feel free to also add any other random fields.
    They can be picked up part of the enterprise portion.
*/

interface package {
    name: string;
    items: item[];
}

interface item {
    name: string;
    displayName?: string;
    sits_on?: string | string[];
    depends_on?: string | string[];
    connects_to?: string | string[];
}
