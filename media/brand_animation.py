"""
Retro Landing - Brand Animation (30 seconds)
Mid-century modern Palm Springs aesthetic - No LaTeX
"""

from manim import *
import numpy as np

# Color Palette matching retro-landing
DESERT = "#F5E6D3"
POOL = "#7FCCCC"
SUNSET = "#E85A3F"
CORAL = "#D4746E"
GOLD = "#D4A853"
PEACH = "#FFCDAB"
TEAL = "#1A3A3A"
CHARCOAL = "#2D2424"

config.background_color = DESERT


class IntroSun(Scene):
    """Scene 1: Geometric sun rising - 5 seconds"""
    
    def construct(self):
        # Horizon line
        horizon = Line(LEFT * 8, RIGHT * 8, stroke_width=4)
        horizon.set_color(CHARCOAL)
        
        # Mountains as triangles
        left_mtn = Polygon(
            [-6, 0, 0], [-2.5, 2.2, 0], [0.5, 0, 0],
            fill_opacity=0.25, stroke_width=2,
            stroke_color=CHARCOAL, fill_color=TEAL
        )
        right_mtn = Polygon(
            [1, 0, 0], [4.5, 1.6, 0], [8, 0, 0],
            fill_opacity=0.2, stroke_width=2,
            stroke_color=CHARCOAL, fill_color=POOL
        )
        
        # Sun with glow
        sun = Circle(radius=1.4, fill_opacity=0.95)
        sun.set_fill(SUNSET)
        sun.set_stroke(CORAL, width=3)
        
        glow = Circle(radius=2.0, fill_opacity=0.12)
        glow.set_fill(SUNSET)
        
        sun_group = VGroup(glow, sun)
        sun_group.move_to(DOWN * 2.5)
        
        self.add(horizon, left_mtn, right_mtn, sun_group)
        
        # Rise animation
        self.play(
            sun_group.animate.move_to(UP * 0.5).scale(1.08),
            run_time=3,
            rate_func=rush_into
        )
        self.play(
            glow.animate.scale(1.4).set_opacity(0.08),
            run_time=2
        )
        self.wait(0.5)


class PoolRipple(Scene):
    """Scene 2: Kidney pool with ripples - 5 seconds"""
    
    def construct(self):
        # Large circle (pool body)
        pool = Circle(radius=2.2, fill_opacity=0.65)
        pool.set_fill(POOL)
        pool.set_stroke(TEAL, width=4)
        
        # Indent circle (creates kidney shape)
        indent = Circle(radius=1.3, fill_opacity=1)
        indent.set_fill(DESERT)
        indent.set_stroke(CHARCOAL, width=2)
        indent.shift(RIGHT * 1.8 + UP * 0.4)
        
        pool_group = VGroup(pool, indent)
        pool_group.move_to(DOWN * 0.5)
        
        self.add(pool_group)
        
        # Ripple effect
        for i in range(5):
            ripple = Circle(radius=0.3, stroke_width=2.5)
            ripple.set_stroke(WHITE, width=2, opacity=0.7)
            ripple.move_to(pool.get_center() + LEFT * 0.5 + DOWN * 0.3)
            
            self.play(ripple.animate.scale(4).set_stroke(width=0.5, opacity=0), run_time=0.9)
            self.wait(0.25)


class PalmTree(Scene):
    """Scene 3: Abstract palm tree - 6 seconds"""
    
    def construct(self):
        # Trunk as stacked rectangles
        trunk = VGroup(*[
            Rectangle(width=0.25, height=0.45, fill_opacity=1)
            .set_fill(CHARCOAL)
            for _ in range(7)
        ])
        trunk.arrange(DOWN, buff=0)
        trunk.shift(LEFT * 3.5 + DOWN * 1.2)
        
        # Palm fronds using Arc
        frond1 = Arc(radius=2, start_angle=0, angle=PI/2)
        frond1.set_stroke(GOLD, width=6)
        frond1.shift(LEFT * 3 + UP * 2.5)
        
        frond2 = Arc(radius=2.3, start_angle=PI/6, angle=PI/2)
        frond2.set_stroke(GOLD, width=5.5)
        frond2.rotate(-PI/2, about_point=frond2.get_top())
        frond2.shift(LEFT * 2.8 + UP * 2.7)
        
        frond3 = Arc(radius=1.6, start_angle=-PI/6, angle=PI/2)
        frond3.set_stroke(GOLD, width=5)
        frond3.rotate(-PI/3, about_point=frond3.get_top())
        frond3.shift(LEFT * 3.2 + UP * 2.3)
        
        frond4 = Arc(radius=1.9, start_angle=PI/3, angle=PI/2)
        frond4.set_stroke(GOLD, width=4.5)
        frond4.rotate(-PI/2, about_point=frond4.get_top())
        frond4.shift(LEFT * 2.5 + UP * 2.4)
        
        self.add(trunk, frond1, frond2, frond3, frond4)
        
        # Sway animation
        for _ in range(3):
            self.play(
                frond1.animate.rotate(0.12, about_point=frond1.get_top()),
                frond2.animate.rotate(-0.08, about_point=frond2.get_top()),
                frond3.animate.rotate(0.1, about_point=frond3.get_top()),
                frond4.animate.rotate(-0.06, about_point=frond4.get_top()),
                run_time=1.2
            )
            self.play(
                frond1.animate.rotate(-0.12, about_point=frond1.get_top()),
                frond2.animate.rotate(0.08, about_point=frond2.get_top()),
                frond3.animate.rotate(-0.1, about_point=frond3.get_top()),
                frond4.animate.rotate(0.06, about_point=frond4.get_top()),
                run_time=1.2
            )


class FloatingShapes(Scene):
    """Scene 4: Geometric shapes floating - 6 seconds"""
    
    def construct(self):
        shapes = VGroup()
        
        # Circle
        c = Circle(radius=0.9, fill_opacity=0.65)
        c.set_fill(SUNSET)
        c.set_stroke(CHARCOAL, width=2.5)
        
        # Rotated square
        s = Square(side_length=1.3, fill_opacity=0.55)
        s.set_fill(POOL)
        s.set_stroke(CHARCOAL, width=2.5)
        s.rotate(PI/5)
        
        # Triangle
        t = Polygon([0, 1, 0], [-1, -0.6, 0], [1, -0.6, 0], fill_opacity=0.7)
        t.set_fill(GOLD)
        t.set_stroke(CHARCOAL, width=2)
        
        # Small dot
        d = Circle(radius=0.45, fill_opacity=0.85)
        d.set_fill(CORAL)
        d.set_stroke(CHARCOAL, width=1.5)
        
        shapes.add(c, s, t, d)
        
        # Position
        c.move_to(UP * 1.2 + LEFT * 2)
        s.move_to(UP * 0.4 + RIGHT * 2)
        t.move_to(DOWN * 1 + LEFT * 0.5)
        d.move_to(DOWN * 0.3 + RIGHT * 2.8)
        
        self.add(shapes)
        
        # Float and rotate
        for _ in range(3):
            self.play(
                c.animate.shift(RIGHT * 0.6 + UP * 0.4).rotate(0.25),
                s.animate.shift(LEFT * 0.4 + DOWN * 0.5).rotate(-0.2),
                t.animate.shift(RIGHT * 0.5 + UP * 0.3).rotate(0.15),
                d.animate.shift(LEFT * 0.7 + UP * 0.35).rotate(-0.3),
                run_time=2.5
            )
            self.play(
                c.animate.shift(LEFT * 0.6 + DOWN * 0.4).rotate(-0.25),
                s.animate.shift(RIGHT * 0.4 + UP * 0.5).rotate(0.2),
                t.animate.shift(LEFT * 0.5 + DOWN * 0.3).rotate(-0.15),
                d.animate.shift(RIGHT * 0.7 + DOWN * 0.35).rotate(0.3),
                run_time=2.5
            )


class Sunburst(Scene):
    """Scene 5: Radiating lines from center - 4 seconds"""
    
    def construct(self):
        center = ORIGIN
        
        rays = VGroup(*[
            Line(center, center + RIGHT * 5.5, stroke_width=3.5)
            .rotate(angle * DEGREES)
            .set_stroke(SUNSET, width=2.5 + (i % 4) * 0.5)
            for i, angle in enumerate(range(0, 360, 12))
        ])
        
        self.add(rays)
        
        # Pulse
        self.play(rays.animate.scale(0.75).set_opacity(0.5), run_time=1.5)
        self.play(rays.animate.scale(1.3).set_opacity(1), run_time=1.2)
        self.play(rays.animate.scale(0.9).set_opacity(0.75), run_time=1.3)


class FinalScene(Scene):
    """Scene 6: Grand finale composition - 4 seconds"""
    
    def construct(self):
        # Large sun
        big_sun = Circle(radius=2.8, fill_opacity=0.85)
        big_sun.set_fill(SUNSET)
        big_sun.set_stroke(CORAL, width=5)
        big_sun.to_corner(RIGHT + UP, buff=1)
        
        # Frame bars
        bar_h = Rectangle(width=10, height=0.18, fill_opacity=1)
        bar_h.set_fill(TEAL)
        bar_h.to_edge(DOWN, buff=1.2)
        
        bar_v = Rectangle(width=0.18, height=6, fill_opacity=1)
        bar_v.set_fill(TEAL)
        bar_v.to_edge(LEFT, buff=1.5)
        
        # Small pool accent
        mini_pool = Circle(radius=1.1, fill_opacity=0.6)
        mini_pool.set_fill(POOL)
        mini_pool.set_stroke(TEAL, width=3)
        mini_pool.to_corner(LEFT + DOWN, buff=1.8)
        
        # Diamond
        diamond = Square(side_length=1.4, fill_opacity=0.4)
        diamond.set_fill(GOLD)
        diamond.set_stroke(CHARCOAL, width=2)
        diamond.rotate(PI/4)
        diamond.move_to(DOWN * 2 + RIGHT * 1.5)
        
        self.add(bar_h, bar_v, mini_pool, diamond, big_sun)
        
        # Subtle shift
        self.play(
            big_sun.animate.shift(UP * 0.4),
            bar_h.animate.shift(UP * 0.2),
            bar_v.animate.shift(RIGHT * 0.2),
            mini_pool.animate.shift(RIGHT * 0.3 + UP * 0.3),
            diamond.animate.rotate(PI/6),
            run_time=2.5
        )
        self.wait(1.5)


if __name__ == "__main__":
    print("Render full 30-second animation:")
    print("  manim -p brand_animation.py IntroSun PoolRipple PalmTree FloatingShapes Sunburst FinalScene")
    print("\nOr render each scene separately.")