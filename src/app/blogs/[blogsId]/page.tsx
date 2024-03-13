type Props = {
    params: {
          blogsId: string
    }
  }
  
  export default function BlogList({ params }: Props) {
    return (
          <h1>Details blog {params.blogsId}</h1>
    )
  }