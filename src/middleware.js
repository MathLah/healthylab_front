import UserHasPermissions from './middleware/UserHasPermissions';
import CommitNavigation from './middleware/CommitNavigation';

export default function (router, store) {
    UserHasPermissions(router, store);
    CommitNavigation(router, store);
}
