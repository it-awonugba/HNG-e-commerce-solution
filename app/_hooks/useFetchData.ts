"use client";
import { useState, useEffect } from "react";

export interface Price {
  [currency: string]: any[];
}

export interface Product {
  available_quantity: number | null;
  buying_price: number | null;
  categories: string[];
  current_price: Price[];
  date_created: string;
  description: string | null;
  discounted_price: number | null;
  extra_infos: string | null;
  featured_reviews: string | null;
  id: string;
  is_available: boolean;
  is_deleted: boolean;
  is_service: boolean;
  last_updated: string;
  name: string;
  organization_id: string;
  parent: string | null;
  parent_product_id: string | null;
  photos: string[];
  previous_url_slugs: string | null;
  prices: string | null;
  product_image: string[];
  selling_price: number | null;
  stock_id: string | null;
  stocks: string | null;
  unavailability: string[];
  unavailable: boolean;
  unavailable_end: string | null;
  unavailable_start: string | null;
  unique_id: string;
  url_slug: string;
  user_id: string;
}

interface FetchProductsResponse {
  products: Product[];
  categories: string[];
  loading: boolean;
  error: string;
}

export const useFetchProducts = (): FetchProductsResponse => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = async (url: string, setData: (data: any) => void) => {
    try {
      setLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load data. Please try again.");
      setLoading(false);
      console.error("Fetch error:", err); // Log the error for debugging
    }
  };

  const getUniqueCategories = (products: Product[]): string[] => {
    const categorySet = new Set<string>();

    products.forEach((product) => {
      product.categories.forEach((category) => {
        categorySet.add(category);
      });
    });

    return Array.from(categorySet);
  };

  useEffect(() => {
    fetchData("/api/products", (data) => setProducts(data.items));
    setCategories(getUniqueCategories(products));
  }, []);

  return { products, categories, loading, error };
};
