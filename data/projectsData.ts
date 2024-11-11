interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'S.H.L',
    description: `The Home of Life, Bitches. This is what my goal is. This is what my dream is . This is what my reality is going to be. This is what God showed me as my purpose, and for that reason only I know that this dream will become a reality.`,
    imgSrc: '/static/images/Home of Life.jpg',
    href: 'https://peopleofmylife.vercel.app/',
  },
]

export default projectsData
