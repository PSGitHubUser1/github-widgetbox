import axios from 'axios'
import errorWidget from './error'

export default function profileWidget(username: string): Promise<String> {
    try {
        const profile = axios.get('https://api.github.com/users/' + username)

        return Promise.all([profile]).then((response) => {
            return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="842" height="165" viewBox="0 0 842 165">
                <defs>
                <filter id="card" x="0" y="0" width="842" height="165" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="5" result="blur"/>
                    <feFlood flood-opacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 200 200">
                    <image width="200" height="200" xlink:href="data:image/jpeg;base64,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"/>
                </pattern>
                </defs>
                <g id="profile-card" transform="translate(-1370 -2006)">
                <g transform="matrix(1, 0, 0, 1, 1370, 2006)" filter="url(#card)">
                    <rect id="card-2" data-name="card" width="812" height="135" rx="30" transform="translate(15 12)" fill="#fff"/>
                </g>
                <rect id="profile-image" width="65" height="65" rx="30" transform="translate(1422 2053)" fill="url(#pattern)"/>
                <text id="text-name" data-name="text-name" transform="translate(1515 2084)" font-size="26" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="0" y="0">${response[0].data.name}</tspan></text>
                <text id="text-url" data-name="text-url" transform="translate(1515 2108)" fill="#bfbfbf" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">GitHub.com/${username}</tspan></text>
                <g id="stars" transform="translate(41 -6)">
                    <rect id="stars-box" width="90" height="37" rx="18.5" transform="translate(2019 2073)" fill="#ffefd1"/>
                    <text id="_24" data-name="24" transform="translate(2067.486 2098)" fill="orange" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">24</tspan></text>
                    <path id="stars-icon" d="M9.6.608,7.369,5.131l-4.992.728a1.094,1.094,0,0,0-.6,1.865l3.611,3.519L4.53,16.215a1.093,1.093,0,0,0,1.585,1.151l4.465-2.347,4.465,2.347a1.094,1.094,0,0,0,1.585-1.151l-.854-4.971,3.611-3.519a1.094,1.094,0,0,0-.6-1.865l-4.992-.728L11.561.608A1.094,1.094,0,0,0,9.6.608Z" transform="translate(2041.073 2082.753)" fill="orange"/>
                </g>
                <g id="followers" transform="translate(1474 1672)">
                    <rect id="followers-box" width="90" height="37" rx="18.5" transform="translate(358 395)" fill="#d1efff"/>
                    <text id="_100" data-name="100" transform="translate(406.4 420)" fill="#00c4ff" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">100</tspan></text>
                    <path id="followers-icon" d="M3.625,9.5A2.417,2.417,0,1,0,1.208,7.084,2.419,2.419,0,0,0,3.625,9.5Zm16.919,0a2.417,2.417,0,1,0-2.417-2.417A2.419,2.419,0,0,0,20.544,9.5Zm1.208,1.208H19.336a2.41,2.41,0,0,0-1.7.7,5.524,5.524,0,0,1,2.836,4.132h2.493a1.207,1.207,0,0,0,1.208-1.208V13.126A2.419,2.419,0,0,0,21.753,10.709Zm-9.668,0a4.23,4.23,0,1,0-4.23-4.23A4.228,4.228,0,0,0,12.085,10.709Zm2.9,1.208h-.313a5.84,5.84,0,0,1-5.174,0H9.185a4.352,4.352,0,0,0-4.351,4.351v1.088a1.813,1.813,0,0,0,1.813,1.813H17.523a1.813,1.813,0,0,0,1.813-1.813V16.269A4.352,4.352,0,0,0,14.985,11.918Zm-8.448-.506a2.41,2.41,0,0,0-1.7-.7H2.417A2.419,2.419,0,0,0,0,13.126v1.208a1.207,1.207,0,0,0,1.208,1.208H3.7A5.538,5.538,0,0,1,6.537,11.412Z" transform="translate(372.6 403.791)" fill="#00c4ff"/>
                </g>
                <g id="repositories" transform="translate(1588 1672)">
                    <rect id="repository-box" width="90" height="37" rx="18.5" transform="translate(358 395)" fill="#ffd1e3"/>
                    <text id="_100-2" data-name="100" transform="translate(401.2 420)" fill="#fa3a75" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">100</tspan></text>
                    <path id="repository-icon" d="M7.106,3A2.106,2.106,0,0,0,5,5.106V17.74a.7.7,0,0,0,.207.5,2.026,2.026,0,0,0,1.9,1.608h.7v-1.4h-.7a.7.7,0,0,1,0-1.4H17.634a1.4,1.4,0,0,0,1.4-1.4V4.4a1.4,1.4,0,0,0-1.4-1.4Zm.7,2.106h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,5.106Zm0,3.51h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,8.615Zm0,3.51h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,12.125Zm1.4,6.317v3.51l2.106-1.4,2.106,1.4v-3.51Zm5.615,0v1.4h3.51a.7.7,0,0,0,0-1.4Z" transform="translate(372.8 402.049)" fill="#fa3a75"/>
                </g>
                </g>
            </svg>`
        })
    } catch (error) {
        return new Promise(() => {
            return errorWidget('Profile', '-25%', 'GitHub API-call error!', '-24%')
        })
    }
}
