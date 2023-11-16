const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/wishlistDB', { useNewUrlParser: true, useUnifiedTopology: true });

const wishlistSchema = new mongoose.Schema({
  apartmentName: String,
  imageUrl: String,
  price: String,
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

app.use(express.static('public')); // Serve static files (like HTML) from the 'public' directory
app.use(express.json()); // Parse JSON requests

app.post('/addToWishlist', async (req, res) => {
  const { apartmentName, imageUrl, price } = req.body;

  try {
    const newApartment = new Wishlist({ apartmentName, imageUrl, price });
    await newApartment.save();
    res.status(201).json({ message: 'Apartment added to wishlist successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
