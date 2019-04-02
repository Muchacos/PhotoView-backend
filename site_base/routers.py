from rest_framework import routers
from photoset.viewsets import PhotoViewSet
from accounts.viewsets import AccountsViewSet

router = routers.DefaultRouter()
router.register(r'photo', PhotoViewSet)
router.register(r'users', AccountsViewSet)
