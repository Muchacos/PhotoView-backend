from rest_framework import viewsets
from .models import Photo
from .serializers import PhotoSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
