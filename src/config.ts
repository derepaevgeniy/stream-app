export interface Config {
    twitchChannel: string,
    mainVideoUrl: string,
}

const fetchConfig = async () => {
    const resp = await fetch('config.json');
    return await resp.json();
}

export {
    fetchConfig,
}