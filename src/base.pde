
int[] sides = new int[]{4, 3, 5, 4, 3};
int[] r = new int[]{255, 153, 140};
int[] g = new int[]{170, 255, 0};
int[] b = new int[]{0, 0, 255};
int count = 0;
int s = 0;
int c = 0;


void setup() {
  size(640, 640);
  stroke(255, 100);
}

void draw() {
  background(255);
  
  fill(r[c], g[c], b[c], 100);
  polygon(width/2, height/2, 250, sides[s]);
  
  count += 1;
  
  if (count == 30) {
    count = 0;
    c += 1;
    s += 1;
    if (c == 3) {
      c = 0;
    }
    if (s == 5) {
      s = 0;
    }
  }
  
}

void polygon(float x, float y, float radius, int npoints) {
  float angle = TWO_PI / npoints;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + sin(a + PI) * radius;
    float sy = y + cos(a + PI) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
