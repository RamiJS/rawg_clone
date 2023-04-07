import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import useData from './useData';

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')


export default usePlatforms

