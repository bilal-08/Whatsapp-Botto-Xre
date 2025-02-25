import yts from 'yt-search'
import responses from '../responses.json'

export const ytSreach = async (term: string): Promise<string> => {
    if (!term) return responses['wrong-format']
    const { videos } = await yts(term)
    if (!videos || videos.length <= 0) return responses['no-search-results'].replace('{T}', term)
    const length = videos.length < 10 ? videos.length : 10
    let base = `Search Term: *${term}*\n\n🔎 *Results*\n\n`
    for (let i = 0; i < length; i++) {
        base += `#${i + 1}\n📗 *Title:* ${videos[1].title}\n📙 *Description:* ${videos[i].description.slice(
            50
        )}\n📘 *URL:* ${videos[i].url}\n\n`
    }
    return base
}
