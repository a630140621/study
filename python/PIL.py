import sys
print(sys.path, len(sys.path))
sys.path.append('F:\\Anaconda\\lib\\site-packages\\IPython\\extensions')
from PIL import Image

im = Image.open(r'F:\work\projects\study\python\demo.jpg')

print(im.size)