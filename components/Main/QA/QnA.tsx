import styles from './QnA.module.css'

type Props = {
    q: string;
    a: string;
}

const QnA: React.FC<Props> = ({ q, a }) => {
    return (
        <div className='container'>
            <div className={styles.question}
                dangerouslySetInnerHTML={{
                    __html: q
                }}>
            </div>

            {/* <div  className={styles.answer}
                dangerouslySetInnerHTML={{
                    __html: a
                }}>
            </div> */}

        </div>
    )
}

export default QnA
