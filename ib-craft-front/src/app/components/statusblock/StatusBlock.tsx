import style from './statusblock.module.css'
import { useStatus } from '@/app/hook/useStatus'

interface StatusUser {
    userId: string
}

export default function StatusBlock({userId}: StatusUser) {
    const status = useStatus(userId);

    const renderStatusblock = () => {
        switch (status) {
            case "Unfiled":
                return (
                    <>
                        <div className={style.status_header}>
                            <span className={style.status_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                    <path d="m7.7773 2.5h84.445c2.9141 0 5.2773 2.3633 5.2773 5.2773v84.445c0 2.9141-2.3633 5.2773-5.2773 5.2773h-84.445c-2.9141 0-5.2773-2.3633-5.2773-5.2773v-84.445c0-2.9141 2.3633-5.2773 5.2773-5.2773zm32.168 29.984c-2.0625-2.0625-5.4023-2.0625-7.4609 0-2.0625 2.0586-2.0625 5.4023 0 7.4609l10.055 10.055-10.055 10.055c-2.0625 2.0625-2.0625 5.4023 0 7.4648 2.0625 2.0586 5.4023 2.0586 7.4609 0l10.055-10.055 10.055 10.055c2.0625 2.0586 5.4023 2.0586 7.4648 0 2.0586-2.0625 2.0586-5.4023 0-7.4648l-10.055-10.055 10.055-10.055c2.0586-2.0625 2.0586-5.4023 0-7.4609-2.0625-2.0625-5.4023-2.0625-7.4648 0l-10.055 10.055z" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <h1 className={style.context_status}>Статус заявки</h1>
                        </div>
                        <div className={style.info_status}>
                            <p className={style.status_text}>Не подана, чтобы её подать нажмите "Подать на получение проходки"</p>
                        </div>
                    </>
                );
            case "Approved":
                return (
                    <>
                        <div className={style.status_header}>
                            <span className={style.status_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                    <path d="m7.7773 2.5h84.445c2.9141 0 5.2773 2.3633 5.2773 5.2773v84.445c0 2.9141-2.3633 5.2773-5.2773 5.2773h-84.445c-2.9141 0-5.2773-2.3633-5.2773-5.2773v-84.445c0-2.9141 2.3633-5.2773 5.2773-5.2773zm32.168 29.984c-2.0625-2.0625-5.4023-2.0625-7.4609 0-2.0625 2.0586-2.0625 5.4023 0 7.4609l10.055 10.055-10.055 10.055c-2.0625 2.0625-2.0625 5.4023 0 7.4648 2.0625 2.0586 5.4023 2.0586 7.4609 0l10.055-10.055 10.055 10.055c2.0625 2.0586 5.4023 2.0586 7.4648 0 2.0586-2.0625 2.0586-5.4023 0-7.4648l-10.055-10.055 10.055-10.055c2.0586-2.0625 2.0586-5.4023 0-7.4609-2.0625-2.0625-5.4023-2.0625-7.4648 0l-10.055 10.055z" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <h1 className={style.context_status}>Статус заявки</h1>
                        </div>
                        <div className={style.info_status}>
                            <p className={style.status_text}>Ваша заявка одобрена!</p>
                        </div>
                    </>
                )
            case "Reject":
                return (
                    <>
                        <div className={style.status_header}>
                            <span className={style.status_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                    <path d="m7.7773 2.5h84.445c2.9141 0 5.2773 2.3633 5.2773 5.2773v84.445c0 2.9141-2.3633 5.2773-5.2773 5.2773h-84.445c-2.9141 0-5.2773-2.3633-5.2773-5.2773v-84.445c0-2.9141 2.3633-5.2773 5.2773-5.2773zm32.168 29.984c-2.0625-2.0625-5.4023-2.0625-7.4609 0-2.0625 2.0586-2.0625 5.4023 0 7.4609l10.055 10.055-10.055 10.055c-2.0625 2.0625-2.0625 5.4023 0 7.4648 2.0625 2.0586 5.4023 2.0586 7.4609 0l10.055-10.055 10.055 10.055c2.0625 2.0586 5.4023 2.0586 7.4648 0 2.0586-2.0625 2.0586-5.4023 0-7.4648l-10.055-10.055 10.055-10.055c2.0586-2.0625 2.0586-5.4023 0-7.4609-2.0625-2.0625-5.4023-2.0625-7.4648 0l-10.055 10.055z" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <h1 className={style.context_status}>Статус заявки</h1>
                        </div>
                        <div className={style.info_status}>
                            <p className={style.status_text}>Ваша заявка отклонена.</p>
                        </div>
                    </>
                )
            case "Pending":
                return (
                    <>
                        <div className={style.status_header}>
                            <span className={style.status_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                    <path d="m7.7773 2.5h84.445c2.9141 0 5.2773 2.3633 5.2773 5.2773v84.445c0 2.9141-2.3633 5.2773-5.2773 5.2773h-84.445c-2.9141 0-5.2773-2.3633-5.2773-5.2773v-84.445c0-2.9141 2.3633-5.2773 5.2773-5.2773zm32.168 29.984c-2.0625-2.0625-5.4023-2.0625-7.4609 0-2.0625 2.0586-2.0625 5.4023 0 7.4609l10.055 10.055-10.055 10.055c-2.0625 2.0625-2.0625 5.4023 0 7.4648 2.0625 2.0586 5.4023 2.0586 7.4609 0l10.055-10.055 10.055 10.055c2.0625 2.0586 5.4023 2.0586 7.4648 0 2.0586-2.0625 2.0586-5.4023 0-7.4648l-10.055-10.055 10.055-10.055c2.0586-2.0625 2.0586-5.4023 0-7.4609-2.0625-2.0625-5.4023-2.0625-7.4648 0l-10.055 10.055z" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <h1 className={style.context_status}>Статус заявки</h1>
                        </div>
                        <div className={style.info_status}>
                            <p className={style.status_text}>Ваша заявка на рассмотрении. Пожалуйста, ожидайте.</p>
                        </div>
                    </>
                )
            case "error":
                return (
                    <>
                        <div className={style.status_header}>
                            <span className={style.status_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                    <path d="m7.7773 2.5h84.445c2.9141 0 5.2773 2.3633 5.2773 5.2773v84.445c0 2.9141-2.3633 5.2773-5.2773 5.2773h-84.445c-2.9141 0-5.2773-2.3633-5.2773-5.2773v-84.445c0-2.9141 2.3633-5.2773 5.2773-5.2773zm32.168 29.984c-2.0625-2.0625-5.4023-2.0625-7.4609 0-2.0625 2.0586-2.0625 5.4023 0 7.4609l10.055 10.055-10.055 10.055c-2.0625 2.0625-2.0625 5.4023 0 7.4648 2.0625 2.0586 5.4023 2.0586 7.4609 0l10.055-10.055 10.055 10.055c2.0625 2.0586 5.4023 2.0586 7.4648 0 2.0586-2.0625 2.0586-5.4023 0-7.4648l-10.055-10.055 10.055-10.055c2.0586-2.0625 2.0586-5.4023 0-7.4609-2.0625-2.0625-5.4023-2.0625-7.4648 0l-10.055 10.055z" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <h1 className={style.context_status}>Статус заявки</h1>
                        </div>
                        <div className={style.info_status}>
                            <p className={style.status_text}>Ошибка при получении статуса. Попробуйте позже.</p>
                        </div>
                    </>
                )
            default:
                return (
                    <>
                        <div className={style.status_header}>
                            <span className={style.status_icon}>

                            </span>
                            <h1 className={style.context_status}>Загрузка статуса...</h1>
                        </div>
                    </>
                )
        }

    }

    return (
        <>
            <div className={style.status}>
                <div className={style.status_item}>
                    {renderStatusblock()}
                </div>
            </div>
        </>
    )
}

