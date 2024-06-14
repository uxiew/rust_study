

export function gHLink2JSON(GH_URL: string) {
    return {
        "label": GH_URL.replace('https://github.com/', ''),
        "url": GH_URL,
    }
}