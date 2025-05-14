import { Navigate } from 'react-router-dom'
import { getUserFromLocalStorage } from '@/core/shared/storage'

export default function ProtectedRoute({ children, allowedRoles }) {
    const user = getUserFromLocalStorage()

    if (!user || !allowedRoles.includes(user.roles[0])) {
        return <Navigate to="/login" replace />
    }
    return children
}