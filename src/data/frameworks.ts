import { IconData } from '../interfaces/IconData'

const frameworks: IconData[] = [
    {
        name: ['Vue', 'VueJS'],
        colorFrom: '#AFF8D6',
        colorTo: '#00B86B',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="26.979" viewBox="0 0 31.5 26.979">
        <path id="vue-logo" data-name="vue-logo" d="M25.095,4.521H19.688l-3.937,6.23-3.375-6.23H0L15.75,31.5,31.5,4.521ZM3.916,6.771H7.7L15.75,20.707,23.794,6.771h3.783L15.75,27.035,3.916,6.771Z" transform="translate(0 -4.521)" fill="#fff"/>
        </svg>`,
        width: 31.5,
        height: 26.979,
        xOffset: 0,
    },
    {
        name: ['React', 'ReactJS'],
        colorFrom: '#A9EEFF',
        colorTo: '#00ACD2',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="31.502" viewBox="0 0 36 31.502">
        <path id="react-logo" data-name="react-logo" d="M29.4,12.459q-.57-.19-1.139-.359c.063-.26.12-.52.176-.78.865-4.191.3-7.559-1.624-8.67-1.849-1.062-4.866.042-7.917,2.7-.3.26-.6.534-.879.809-.19-.183-.387-.366-.584-.541-3.2-2.841-6.405-4.036-8.325-2.918C7.27,3.769,6.722,6.94,7.5,10.905c.077.394.162.78.26,1.174-.45.127-.893.267-1.308.415C2.693,13.8,0,15.848,0,17.972c0,2.194,2.869,4.395,6.771,5.73.316.105.633.211.956.3-.105.422-.2.837-.281,1.266-.738,3.9-.162,7,1.68,8.058,1.9,1.1,5.091-.028,8.2-2.749.246-.218.492-.443.738-.682.309.3.633.591.956.872C22.029,33.356,25,34.4,26.838,33.342c1.9-1.1,2.517-4.423,1.716-8.473q-.095-.464-.211-.949c.225-.063.443-.134.661-.2,4.057-1.343,7-3.516,7-5.745,0-2.13-2.77-4.2-6.6-5.512ZM19.891,6.49c2.616-2.278,5.055-3.171,6.166-2.531,1.188.682,1.645,3.438.9,7.059-.049.239-.1.471-.162.7a35.995,35.995,0,0,0-4.732-.745,35.525,35.525,0,0,0-3-3.734c.274-.26.541-.506.823-.752ZM11.756,21.621c.359.612.724,1.223,1.111,1.821A31.839,31.839,0,0,1,9.6,22.915a32.846,32.846,0,0,1,1.146-3.129c.323.619.654,1.23,1.005,1.835Zm-2.13-8.459c1.012-.225,2.088-.408,3.206-.548-.373.584-.738,1.181-1.083,1.786s-.682,1.209-1,1.828c-.443-1.048-.816-2.074-1.125-3.066Zm1.927,4.845c.464-.97.97-1.92,1.5-2.855s1.111-1.842,1.716-2.735c1.055-.077,2.13-.12,3.227-.12s2.18.042,3.227.12q.9,1.329,1.709,2.721t1.526,2.841q-.707,1.455-1.519,2.869c-.534.935-1.1,1.842-1.7,2.742-1.048.077-2.138.112-3.241.112s-2.173-.035-3.206-.1q-.918-1.339-1.73-2.742c-.541-.935-1.041-1.884-1.512-2.855Zm12.7,3.6c.359-.619.7-1.245,1.027-1.877a32.64,32.64,0,0,1,1.188,3.115,30.884,30.884,0,0,1-3.3.563C23.541,22.816,23.9,22.212,24.251,21.607Zm1.013-5.379c-.33-.619-.668-1.238-1.02-1.842s-.7-1.188-1.076-1.772a32.357,32.357,0,0,1,3.227.563,31.117,31.117,0,0,1-1.132,3.052Zm-7.249-7.91A30.876,30.876,0,0,1,20.1,10.835c-1.392-.063-2.791-.063-4.184,0C16.6,9.928,17.311,9.084,18.014,8.318ZM9.858,4.008c1.181-.689,3.8.3,6.567,2.742.176.155.352.323.534.492a35.723,35.723,0,0,0-3.016,3.734,37.064,37.064,0,0,0-4.725.731c-.091-.359-.169-.724-.246-1.09-.661-3.4-.225-5.97.886-6.609ZM8.135,22.542c-.3-.084-.584-.176-.872-.274a14.341,14.341,0,0,1-4.43-2.194,3.155,3.155,0,0,1-1.322-2.1c0-1.287,2.222-2.932,5.428-4.05.4-.141.809-.267,1.216-.387a37.388,37.388,0,0,0,1.723,4.472,38.434,38.434,0,0,0-1.744,4.535Zm8.2,6.891a12.869,12.869,0,0,1-3.966,2.482,3.112,3.112,0,0,1-2.482.091c-1.118-.647-1.582-3.129-.949-6.469.077-.394.162-.788.26-1.174a35.175,35.175,0,0,0,4.774.689,37.106,37.106,0,0,0,3.037,3.755C16.784,29.025,16.559,29.236,16.334,29.433Zm1.723-1.709c-.717-.773-1.434-1.631-2.13-2.552.675.028,1.371.042,2.074.042.724,0,1.434-.014,2.138-.049a30.322,30.322,0,0,1-2.081,2.559Zm9.19,2.109a3.125,3.125,0,0,1-1.16,2.2c-1.118.647-3.5-.2-6.075-2.4-.3-.253-.591-.527-.893-.809a34.783,34.783,0,0,0,2.967-3.769,34.662,34.662,0,0,0,4.8-.738c.07.288.134.577.19.858a12.817,12.817,0,0,1,.176,4.662Zm1.28-7.559c-.2.063-.394.127-.6.183a35.719,35.719,0,0,0-1.793-4.486,35.54,35.54,0,0,0,1.723-4.423c.366.105.717.218,1.055.33,3.277,1.125,5.576,2.8,5.576,4.078,0,1.378-2.454,3.157-5.962,4.317ZM18,21.22A3.22,3.22,0,1,0,14.78,18,3.22,3.22,0,0,0,18,21.22Z" transform="translate(0 -2.251)" fill="#fff"/>
        </svg>
        `,
        width: 36,
        height: 31.502,
        xOffset: 0,
    },
    {
        name: ['Nuxt', 'NuxtJS'],
        colorFrom: '#7EF2C7',
        colorTo: '#00B97E',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="35.996" height="26.73" viewBox="0 0 35.996 26.73">
        <path id="nuxt-logo" data-name="nuxt-logo" d="M29.586,30.408l.035-.067a1.11,1.11,0,0,0,.08-.176l0-.007a1.74,1.74,0,0,0,.081-.91l0,.01a2.693,2.693,0,0,0-.353-.934l.008.012-7.976-14.03-1.218-2.13-1.211,2.13-7.971,14.03a2.775,2.775,0,0,0-.306.906l0,.017a1.886,1.886,0,0,0,.12,1.069l0-.012a1.214,1.214,0,0,0,.075.153l0-.006a1.971,1.971,0,0,0,1.875.9H27.667a2.272,2.272,0,0,0,1.92-.955Zm-9.34-13.974,7.288,12.822H12.96Zm15.373,11.9L25.095,9.8a2.214,2.214,0,0,0-1.773-1.181,1.961,1.961,0,0,0-1.713,1.177l-1.361,2.385,1.211,2.13,1.875-3.318,10.411,18.27h-3.96a1.78,1.78,0,0,1-.087.912l0-.012a1.158,1.158,0,0,1-.085.189l0-.006-.035.067a2.264,2.264,0,0,1-1.908.955h6.194a2.261,2.261,0,0,0,1.908-.955,1.968,1.968,0,0,0-.16-2.073ZM10.956,30.461a1.483,1.483,0,0,1-.068-.138l0-.009a1.842,1.842,0,0,1-.126-1.068l0,.01H2.251L14.9,7.008l4.15,7.3,1.2-2.13L16.63,5.8a2.211,2.211,0,0,0-1.766-1.166,1.965,1.965,0,0,0-1.713,1.181L.345,28.333a2.266,2.266,0,0,0-.112,2.125,1.971,1.971,0,0,0,1.875.9H12.834a1.966,1.966,0,0,1-1.875-.9Z" transform="translate(-0.004 -4.635)" fill="#fff"/>
        </svg>
        `,
        width: 35.996,
        height: 26.73,
        xOffset: 0,
    },
    {
        name: ['Next', 'NextJS'],
        colorFrom: '#9DC7FF',
        colorTo: '#2579E2',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="35.998" height="35.998" viewBox="0 0 35.998 35.998">
        <path id="next-logo" data-name="next-logo" d="M26.719,33.753c-.133.07-.126.1.007.032a.342.342,0,0,0,.105-.07c0-.024,0-.021-.113.039Zm.267-.141c-.063.049-.063.053.014.014a.216.216,0,0,0,.078-.053C27.078,33.544,27.06,33.552,26.986,33.612Zm.176-.106c-.063.049-.063.053.014.014a.216.216,0,0,0,.078-.053C27.253,33.438,27.236,33.445,27.162,33.506Zm.176-.1c-.063.049-.063.053.014.014a.216.216,0,0,0,.078-.053C27.429,33.333,27.411,33.34,27.338,33.4Zm.243-.158c-.123.078-.162.131-.052.07.078-.045.2-.141.183-.144a.7.7,0,0,0-.131.073ZM16.821.009c-.078.008-.324.032-.546.049A18.038,18.038,0,0,0,3.34,7.518,17.814,17.814,0,0,0,.164,15.382,13.8,13.8,0,0,0,0,18a13.81,13.81,0,0,0,.162,2.622A18.074,18.074,0,0,0,12.476,35.169a19.018,19.018,0,0,0,3.8.787,33.055,33.055,0,0,0,3.448,0,18.171,18.171,0,0,0,6.485-1.9c.309-.159.369-.2.327-.236Q25.056,31.87,23.6,29.9l-2.879-3.888L17.119,20.67q-1.8-2.679-3.631-5.334c-.014,0-.029,2.368-.035,5.263-.01,5.07-.014,5.274-.078,5.394a.636.636,0,0,1-.309.32c-.113.057-.212.067-.743.067h-.609l-.162-.1a.663.663,0,0,1-.236-.257l-.073-.159.007-7.055.01-7.057.109-.137a.956.956,0,0,1,.261-.215c.144-.071.2-.078.81-.078.719,0,.837.028,1.024.233q2.19,3.259,4.343,6.542c2.337,3.543,5.53,8.38,7.1,10.756l2.85,4.317.144-.095a18.51,18.51,0,0,0,3.7-3.245,17.91,17.91,0,0,0,4.236-9.2A13.8,13.8,0,0,0,36,18.007a13.81,13.81,0,0,0-.162-2.622A18.074,18.074,0,0,0,23.526.843,18.828,18.828,0,0,0,19.779.058c-.337-.034-2.664-.073-2.955-.045ZM24.189,10.9a.707.707,0,0,1,.355.415c.029.092.035,2.047.029,6.456l-.01,6.327-1.116-1.71-1.119-1.71v-4.6c0-2.973.014-4.644.035-4.725a.726.726,0,0,1,.348-.444c.144-.073.2-.081.75-.081C23.98,10.825,24.072,10.833,24.189,10.9Z" transform="translate(-0.002 -0.004)" fill="#fff"/>
        </svg>
        `,
        width: 35.998,
        height: 35.998,
        xOffset: 0,
    },
    {
        name: ['Django'],
        colorFrom: '#60F3B7',
        colorTo: '#29AA78',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="27.942" height="35.999" viewBox="0 0 27.942 35.999">
        <path id="django-logo" data-name="django-logo" d="M16.719,0H22.6V27.247a38.849,38.849,0,0,1-7.644.8c-7.187,0-10.932-3.249-10.932-9.48,0-6,3.975-9.9,10.13-9.9a9.4,9.4,0,0,1,2.561.306Zm0,13.715a5.841,5.841,0,0,0-1.988-.306c-2.982,0-4.7,1.835-4.7,5.046,0,3.135,1.644,4.854,4.663,4.854a13.581,13.581,0,0,0,2.025-.153V13.713ZM31.971,9.09V22.736c0,4.7-.344,6.957-1.375,8.906C29.64,33.514,28.379,34.7,25.779,36l-5.466-2.6c2.6-1.222,3.861-2.293,4.663-3.938.841-1.681,1.108-3.632,1.108-8.752V9.089h5.886ZM26.085.032h5.886V6.07H26.085Z" transform="translate(-4.029)" fill="#fff"/>
        </svg>
        `,
        width: 27.942,
        height: 35.999,
        xOffset: 0,
    },
    {
        name: ['Flutter'],
        colorFrom: '#AAE1FB',
        colorTo: '#07ADFA',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="29.1" height="35.999" viewBox="0 0 29.1 35.999">
        <path id="flutter-logo" data-name="flutter-logo" d="M21.471,0,3.45,18,9,23.55,32.526.018H21.491Zm.021,16.608-9.707,9.685L21.491,36H32.55l-9.69-9.7,9.69-9.69H21.493Z" transform="translate(-3.45)" fill="#fff"/>
        </svg>
        `,
        width: 29.1,
        height: 35.998,
        xOffset: 0,
    },
    {
        name: ['Electron', 'ElectronJS'],
        colorFrom: '#A9E4F1',
        colorTo: '#469FB1',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33.29" height="36" viewBox="0 0 33.29 36">
        <path id="electron-logo" data-name="electron-logo" d="M3.978,17.557C2.417,14.836,2.1,12.289,3.21,10.369,4.7,7.8,8.424,6.9,13.139,7.755a.484.484,0,1,1-.173.952c-4.36-.794-7.684.008-8.919,2.147-.91,1.574-.636,3.772.77,6.224a.484.484,0,1,1-.839.481ZM26.41,8.433c2.759.036,4.745.9,5.64,2.445,1.233,2.133.271,5.4-2.583,8.776a.484.484,0,1,0,.737.625c3.088-3.647,4.166-7.316,2.684-9.885-1.092-1.89-3.4-2.887-6.463-2.927a.484.484,0,1,0-.012.967ZM23.622,31.344a.484.484,0,0,0-.665.165c-1.4,2.335-3.127,3.607-4.9,3.607-2.469,0-4.823-2.476-6.315-6.642a.484.484,0,1,0-.911.326c1.613,4.507,4.255,7.283,7.223,7.283,2.165,0,4.169-1.476,5.733-4.074a.484.484,0,0,0-.165-.665Zm11.06-3.9a2.315,2.315,0,0,1-3.662,1.879c-3.691,2.173-10.744,1.067-17.38-2.766A30.257,30.257,0,0,1,6.43,20.867a.484.484,0,1,1,.716-.651,29.273,29.273,0,0,0,6.976,5.5c6.265,3.617,12.859,4.691,16.233,2.866a2.315,2.315,0,1,1,4.327-1.141Zm-28.659,0a2.315,2.315,0,1,1-3.435-2.022C2.237,21.1,6.782,15.3,13.653,11.332a30.145,30.145,0,0,1,8.616-3.414.484.484,0,0,1,.2.944,29.275,29.275,0,0,0-8.337,3.308c-6.471,3.736-10.747,9.122-10.6,12.97.057,0,.113-.009.17-.009a2.316,2.316,0,0,1,2.315,2.315ZM15.741,2.315a2.315,2.315,0,0,1,4.628,0c0,.035,0,.068,0,.1,3.832,1.98,6.5,8.735,6.5,16.543a30.348,30.348,0,0,1-1.284,8.961.484.484,0,1,1-.923-.289,29.39,29.39,0,0,0,1.24-8.672c0-7.352-2.445-13.674-5.784-15.581a2.312,2.312,0,0,1-4.368-1.063ZM17.7,17.321a1.675,1.675,0,1,0,1.991,1.284A1.675,1.675,0,0,0,17.7,17.321Z" transform="translate(-1.392 -0.083)" fill="#fff"/>
        </svg>
        `,
        width: 33.29,
        height: 36,
        xOffset: 0,
    },
    {
        name: ['Bootstrap'],
        colorFrom: '#E1BEFF',
        colorTo: '#892EE5',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path id="bootstrap-logo" data-name="bootstrap-logo" d="M23.488,24.744a3.2,3.2,0,0,1-3.529,3.329h-6.5V21.509h6.5c3.42,0,3.529,2.563,3.529,3.235Zm-4.03-5.877c.054,0,3.089.08,3.089-2.918,0-1.247-.282-2.882-3.089-2.882h-6v5.8ZM36,8.25v24a6.018,6.018,0,0,1-6,6H6a6.018,6.018,0,0,1-6-6v-24a6.018,6.018,0,0,1,6-6H30A6.018,6.018,0,0,1,36,8.25ZM27.165,25.221c0-1.733-.534-4.684-3.942-5.412V19.75a4.6,4.6,0,0,0,3-4.471c0-.562.161-5.206-6.236-5.206H9.783v21c10.3,0,11.24.135,13.146-.459a5.4,5.4,0,0,0,4.236-5.394Z" transform="translate(0 -2.25)" fill="#fff"/>
        </svg>
        `,
        width: 36,
        height: 36,
        xOffset: 0,
    },
    {
        name: ['Gatsby', 'GatsbyJS'],
        colorFrom: '#F3A1FF',
        colorTo: '#6E2BB0',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36.002" viewBox="0 0 36 36.002">
        <path id="gatsby-logo" data-name="gatsby-logo" d="M18.011.01a17.9,17.9,0,0,0-18,18,17.906,17.906,0,0,0,18,18,17.9,17.9,0,0,0,18-18A17.9,17.9,0,0,0,18.011.01ZM3.923,18.167,17.855,32.1A13.963,13.963,0,0,1,3.923,18.167ZM21.142,31.786,4.237,14.881a14.147,14.147,0,0,1,25.2-5.164L27.4,11.436a11.492,11.492,0,0,0-9.548-5.008A11.339,11.339,0,0,0,7.054,14.1L21.768,28.813a11.149,11.149,0,0,0,7.2-8.14H22.863V18.011H32.1A14.111,14.111,0,0,1,21.142,31.786Z" transform="translate(-0.01 -0.01)" fill="#fff"/>
        </svg>
        `,
        width: 36,
        height: 36.002,
        xOffset: 0,
    },
    {
        name: ['Nest', 'NestJS'],
        colorFrom: '#FFAFBE',
        colorTo: '#E0234D',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="35.775" viewBox="0 0 36 35.775">
        <path id="nest-logo" d="M21.085.3a2.108,2.108,0,0,0-.73.14,2.053,2.053,0,0,1,.87,1.207c0,.056.028.112.028.168s.028.112.028.168c.028.814-.224.926-.393,1.4a1.91,1.91,0,0,0,.14,1.824.7.7,0,0,0,.112.2c-.365-2.357,1.6-2.694,1.964-3.423.028-.645-.505-1.066-.926-1.375A1.98,1.98,0,0,0,21.085.3Zm2.946.505A2.167,2.167,0,0,1,24,1.086a.777.777,0,0,1-.028.253c-.028.084-.028.14-.056.224s-.056.14-.084.224a1.368,1.368,0,0,0-.084.2c-.028.028-.056.084-.084.112s-.028.056-.056.084c-.056.056-.084.14-.14.2l-.168.168h0a.744.744,0,0,1-.168.14c-.2.14-.421.253-.617.393-.056.056-.14.084-.2.14s-.112.084-.168.14l-.168.168a.5.5,0,0,0-.14.2c-.056.056-.084.14-.14.2a.84.84,0,0,1-.112.224c-.028.084-.056.14-.084.224a.867.867,0,0,0-.056.224.169.169,0,0,1-.028.112.169.169,0,0,1-.028.112V5.21a.618.618,0,0,0,.028.224.66.66,0,0,0,.056.224c.028.084.056.14.084.224.028.056.056.084.056.14L19.485,5.21c-.365-.112-.7-.2-1.066-.281-.2-.056-.393-.084-.589-.14q-.842-.168-1.684-.253H16.09a16.353,16.353,0,0,0-1.655-.084c-.421,0-.814.028-1.207.056-.561.028-1.122.112-1.684.2l-.421.084c-.281.056-.561.112-.842.2-.14.028-.281.084-.421.112-.14.056-.281.112-.393.168s-.2.084-.309.14c-.028,0-.028,0-.056.028-.084.056-.168.084-.253.14a.1.1,0,0,0-.056.028,2.6,2.6,0,0,1-.281.14c-.056.028-.14.056-.2.084-.028.028-.056.028-.084.056-.084.056-.168.084-.253.14a1.566,1.566,0,0,0-.224.14c-.056.056-.14.084-.2.14a.027.027,0,0,0-.028.028.744.744,0,0,0-.168.14L7.336,6.5c-.056.028-.084.084-.14.112-.028,0-.028.028-.056.028-.056.028-.084.084-.14.112a.027.027,0,0,1-.028.028L6.8,6.95l-.028.028-.168.168a.027.027,0,0,1-.028.028l-.14.14c-.028.028-.056.028-.056.056l-.168.168c0,.028-.028.028-.028.056l-.224.224-.028.028a3.614,3.614,0,0,1-.477.449c-.168.14-.337.281-.533.421a6.35,6.35,0,0,1-.561.365,5.608,5.608,0,0,1-.589.281,5.059,5.059,0,0,1-.589.224,10.913,10.913,0,0,1-1.122.281c0-.14-.084-.112-.168-.112-.084.028-.168.028-.224.056-.084.028-.14.056-.224.084a.84.84,0,0,0-.224.112c-.056.056-.14.084-.2.14s-.14.112-.2.168-.14.112-.2.168a1.22,1.22,0,0,0-.168.2.984.984,0,0,0-.14.224,1.566,1.566,0,0,0-.14.224c-.028.084-.084.168-.112.253l-.084.253c-.028.084-.028.14-.056.224v.028a.866.866,0,0,0-.028.253c.028-.028.028.028.028.084v.112c0,.056.028.112.028.168.028.056.028.112.056.168h0a.587.587,0,0,0,.112.168c.028.056.084.112.112.168a.744.744,0,0,0,.168.14.744.744,0,0,0,.168.14,2.931,2.931,0,0,0,.561.421c.056.028.084.056.14.084H1.3v.056a.66.66,0,0,0,.056.224,1.933,1.933,0,0,0,.084.224l.084.168c0,.028.028.028.028.056a1.22,1.22,0,0,0,.112.2c.056.056.084.14.14.2l.168.168.168.168h.028c.056.056.112.084.168.14a.7.7,0,0,0,.2.112,1.666,1.666,0,0,0,.224.112.406.406,0,0,0,.2.056.027.027,0,0,1,.028.028c.028,0,.084.028.112.028a4.571,4.571,0,0,0,.028,1.15c.084.2.505-.393.9-1.038a6.084,6.084,0,0,0,0,1.627c.112.224.645-.505,1.15-1.291a10.745,10.745,0,0,1,13.216,9.456,1.815,1.815,0,0,0-1.936-1.431,4.856,4.856,0,0,1-1.515,2.1,6.843,6.843,0,0,0-.084-1.852,5.676,5.676,0,0,1-1.15,2.329,2.584,2.584,0,0,1-2.217-1.01c-.028-.028-.056-.084-.084-.112-.028-.056-.056-.14-.084-.2a.52.52,0,0,1-.056-.2v-.337a.52.52,0,0,1,.056-.2c.028-.056.028-.14.056-.2a.7.7,0,0,1,.112-.2c.168-.449.168-.814-.14-1.01l-.168-.084c-.028,0-.084-.028-.112-.028s-.056-.028-.084-.028c-.056-.028-.14-.028-.2-.056a.478.478,0,0,0-.2-.028c-.056,0-.14-.028-.2-.028h-.14a.416.416,0,0,0-.2.028c-.056,0-.14.028-.2.028-.056.028-.14.028-.2.056a1.368,1.368,0,0,1-.2.084l-.168.084c-2.161,1.4-.87,4.714.589,5.668a5.729,5.729,0,0,0-1.291.337L8.57,29.4a6.585,6.585,0,0,0,1.263.617c.589.2,1.235.365,1.515.449h0a8.087,8.087,0,0,0,2.329.168,8.834,8.834,0,0,0,8.081-7.52c.028.084.028.168.056.253.028.168.056.337.084.533h0a.777.777,0,0,1,.028.253v.028c0,.084.028.168.028.253,0,.112.028.2.028.309v1.178c0,.084-.028.14-.028.224v.084c0,.084-.028.168-.028.281h0c-.028.084-.028.168-.056.253v.028c-.028.084-.028.168-.056.253v.028c-.028.084-.028.168-.056.253v.028l-.084.253v.028c-.028.084-.056.2-.084.281a1.934,1.934,0,0,1-.112.281,1.173,1.173,0,0,1-.112.281,2.911,2.911,0,0,0-.112.281h0c-.028.084-.084.168-.112.253a.1.1,0,0,1-.028.056.027.027,0,0,1-.028.028A8.679,8.679,0,0,1,18.475,32.2c-.084.056-.14.112-.224.168-.028.028-.056.028-.056.056-.056.056-.14.084-.2.14l.028.056h0c.14-.028.253-.028.393-.056h0a6.681,6.681,0,0,0,.73-.14.52.52,0,0,0,.2-.056c.056,0,.084-.028.14-.028s.14-.028.2-.028c.056-.028.112-.028.168-.056a17.844,17.844,0,0,0,2.694-.9,14.941,14.941,0,0,1-5.752,4.714,15.339,15.339,0,0,0,3.171-.561A14.757,14.757,0,0,0,28.717,28.5a15.174,15.174,0,0,1-2.5,5.977,15.7,15.7,0,0,0,2.469-2.048,14.612,14.612,0,0,0,3.9-7.885A14.892,14.892,0,0,1,32.869,29c6.706-9.344.561-19.024-2.02-21.577,0-.028-.028-.028-.028-.056v0a1.366,1.366,0,0,1-.028.337c-.028.224-.056.421-.084.617-.056.2-.112.421-.168.617a5.058,5.058,0,0,1-.224.589,3.492,3.492,0,0,1-.281.561c-.112.168-.224.365-.337.533a6.163,6.163,0,0,1-.393.505c-.14.168-.281.309-.449.477a1.1,1.1,0,0,1-.281.224,1.405,1.405,0,0,0-.224.2,3.573,3.573,0,0,1-.533.365,3.594,3.594,0,0,1-.561.309l-.589.253a4.835,4.835,0,0,1-.589.2,4.887,4.887,0,0,1-.617.14c-.224.028-.421.056-.617.084-.14,0-.309.028-.449.028-.224,0-.421-.028-.617-.028-.224-.028-.421-.056-.617-.084a2.229,2.229,0,0,1-.617-.168h0a4.659,4.659,0,0,0,.617-.084,3.982,3.982,0,0,0,.617-.14,3.628,3.628,0,0,0,.589-.2l.589-.253a5.565,5.565,0,0,0,.561-.309c.168-.112.365-.253.533-.365.168-.14.337-.281.477-.421.168-.14.309-.309.449-.449a6.162,6.162,0,0,0,.393-.505c.028-.028.028-.056.056-.084.084-.14.2-.309.281-.449a5.232,5.232,0,0,0,.281-.561,5.058,5.058,0,0,0,.224-.589l.168-.589a5.386,5.386,0,0,0,.084-.617,4.756,4.756,0,0,0,.028-.617,2.414,2.414,0,0,0-.028-.449c-.028-.224-.056-.421-.084-.617a3.982,3.982,0,0,0-.14-.617c-.056-.2-.14-.393-.2-.589-.084-.2-.168-.393-.253-.561-.112-.2-.2-.365-.309-.561-.112-.168-.253-.337-.365-.505-.14-.168-.281-.309-.421-.477a1.815,1.815,0,0,0-.253-.224,13.283,13.283,0,0,0-1.291-.9,1.368,1.368,0,0,0-.2-.084,2.792,2.792,0,0,0-.926-.505Z" transform="translate(0.1 -0.3)" fill="#fff"/>
        </svg>
        `,
        width: 36,
        height: 35.775,
        xOffset: 0,
    },
    {
        name: ['TailwindCSS', 'Tailwind'],
        colorFrom: '#3AD5C5',
        colorTo: '#00ABD0',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="42.554" height="25.532" viewBox="0 0 42.554 25.532">
        <path id="tailwind-logo" data-name="tailwind-logo" d="M21.277,0Q12.766,0,10.638,8.511q3.192-4.255,7.447-3.192c1.619.4,2.776,1.579,4.056,2.879,2.086,2.117,4.5,4.568,9.774,4.568q8.511,0,10.638-8.511-3.192,4.255-7.447,3.192c-1.619-.4-2.776-1.579-4.056-2.879C28.965,2.451,26.55,0,21.277,0ZM10.638,12.766Q2.128,12.766,0,21.277q3.192-4.255,7.447-3.192c1.619.4,2.776,1.579,4.056,2.879,2.086,2.117,4.5,4.568,9.774,4.568q8.511,0,10.638-8.511-3.192,4.255-7.447,3.192c-1.619-.4-2.776-1.579-4.056-2.879C18.326,15.217,15.912,12.766,10.638,12.766Z" fill="#fff"/>
        </svg>
        `,
        width: 42.554,
        height: 25.532,
        xOffset: 0,
    },
    {
        name: ['WindiCSS', 'Windi'],
        colorFrom: '#51C3F1',
        colorTo: '#388DEE',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33.12" height="36" viewBox="0 0 33.12 36">
        <g id="windi-logo" data-name="windi-logo" transform="translate(-19 -14)">
          <path id="Path_135" data-name="Path 135" d="M36.321,20.334A6.341,6.341,0,0,0,29.987,14a5.6,5.6,0,0,0-5.881,5.429h3.619a2.037,2.037,0,0,1,2.262-1.81A2.718,2.718,0,0,1,32.7,20.334c0,1.5-1.092,2.714-3.847,2.714H19v3.619h9.854C33.5,26.667,36.321,23.826,36.321,20.334Zm0,0A6.341,6.341,0,0,0,29.987,14a5.6,5.6,0,0,0-5.881,5.429h3.619a2.037,2.037,0,0,1,2.262-1.81A2.718,2.718,0,0,1,32.7,20.334c0,1.5-1.092,2.714-3.847,2.714H19v3.619h9.854C33.5,26.667,36.321,23.826,36.321,20.334Z" fill="#fff"/>
          <path id="Path_136" data-name="Path 136" d="M56.666,85.171A6.337,6.337,0,0,1,50.34,91.5a5.6,5.6,0,0,1-5.874-5.429h3.615a2.035,2.035,0,0,0,2.259,1.81,2.716,2.716,0,0,0,2.711-2.715c0-1.5-1.374-2.714-3.842-2.714H38.288V78.837H49.209C53.852,78.837,56.666,81.679,56.666,85.171Zm0,0A6.337,6.337,0,0,1,50.34,91.5a5.6,5.6,0,0,1-5.874-5.429h3.615a2.035,2.035,0,0,0,2.259,1.81,2.716,2.716,0,0,0,2.711-2.715c0-1.5-1.374-2.714-3.842-2.714H38.288V78.837H49.209C53.852,78.837,56.666,81.679,56.666,85.171Z" transform="translate(-12.339 -41.505)" fill="#fff"/>
          <path id="Path_137" data-name="Path 137" d="M45.28,29.5a6.71,6.71,0,0,0-6.8,7.028h3.2a3.36,3.36,0,0,1,3.6-3.425c2.16,0,3.24,1.441,3.24,3.425s-1.4,3.619-5.22,3.619H19v3.619H43.84c5.653,0,8.28-3.636,8.28-7.239A6.653,6.653,0,0,0,45.28,29.5Z" transform="translate(0 -9.923)" fill="#fff"/>
          <path id="Path_138" data-name="Path 138" d="M23.745,78.837H19v3.65h4.745Z" transform="translate(0 -41.498)" fill="#fff"/>
        </g>
        </svg>
        `,
        width: 33.12,
        height: 36,
        xOffset: 0,
    },
]

export default frameworks
