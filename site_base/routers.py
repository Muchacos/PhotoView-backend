from rest_framework import routers
from photoset.viewsets import PhotoViewSet

router = routers.DefaultRouter()
router.register(r'photo', PhotoViewSet)
