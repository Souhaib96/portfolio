import { Testimonial } from '@/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface TestimonialsState {
    testimonials: Testimonial[];
}

const initialState: TestimonialsState = {
    testimonials: [
        {
            id: "884",
            name: "John Doe",
            content: "Ce produit est incroyable ! Je l'adore.",
        }
    ]
};

const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {
        addTestimonial: (state, action: PayloadAction<Testimonial>) => {

            state.testimonials = [...state.testimonials, action.payload];
        },
        modifyTestimonial: (state, action: PayloadAction<Testimonial>) => {
            const index = state.testimonials.findIndex((testimonial) => testimonial.id === action.payload.id);
            if (index !== -1) {
                state.testimonials[index] = action.payload;
            }else {
                state.testimonials = [...state.testimonials, action.payload];
            }

        }
    },
});

export default testimonialsSlice.reducer;

export const { addTestimonial, modifyTestimonial } = testimonialsSlice.actions;