 type Props = {
    params: {
          reviewId: string
    }
  }
  
  export default function ReviewList({ params }: Props) {
    return (
          <h1>Details about review {params.reviewId}</h1>
    )
  }